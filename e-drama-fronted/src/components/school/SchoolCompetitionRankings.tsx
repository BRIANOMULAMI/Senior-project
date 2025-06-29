import { BarChart3, FileDown, Loader2Icon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { UseSchoolsGetCompetitionRankings } from "@/Api/Schools";

interface Props {
  id: string;
  name: string;
}

const SchoolCompetitionRankings = ({ id, name }: Props) => {
  const { data: RANKINGS, isLoading: RANKINGS_LOADING } =
    UseSchoolsGetCompetitionRankings(id);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center space-x-2 cursor-pointer">
          <BarChart3 className="w-4 h-4 text-indigo-600" />
          <button className="text-indigo-600 hover:text-indigo-400 text-sm font-medium hover:underline transition duration-150">
            View Rankings
          </button>
        </div>
      </PopoverTrigger>

      <PopoverContent
        align="center"
        side="bottom"
        className="w-[90vw] max-w-5xl bg-gray-800 border border-gray-700 text-gray-200 p-6 shadow-xl rounded-xl overflow-auto"
        sideOffset={16}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-lime-300">
            Competition Rankings for {name}
          </h2>
          <Button
            variant="outline"
            className="border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white flex items-center space-x-2"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>

        <Table>
          <TableCaption className="text-gray-400 text-sm mb-2">
            Summary of your school's standing in recent competitions
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">S/N</TableHead>
              <TableHead className="text-gray-300">Competition</TableHead>
              <TableHead className="text-gray-300">School</TableHead>
              <TableHead className="text-gray-300">Ranking</TableHead>
              <TableHead className="text-gray-300">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {RANKINGS_LOADING ? (
              <Loader2Icon className="animate-spin mx-auto" />
            ) : (
              RANKINGS?.map((entry, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-gray-700 transition-all duration-150"
                >
                  <TableCell className="text-gray-100 font-semibold">
                    {i + 1}
                  </TableCell>
                  <TableCell className="text-gray-100">
                    {entry.participant.competition.name}
                  </TableCell>
                  <TableCell className="text-gray-100">
                    {entry.participant.school.user.name}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full font-semibold text-sm ${
                        i === 0
                          ? "bg-yellow-500 text-gray-900"
                          : i === 1
                          ? "bg-gray-400 text-gray-900"
                          : i === 2
                          ? "bg-amber-700 text-white"
                          : "bg-gray-700 text-gray-200"
                      }`}
                    >
                      {i + 1} / {entry.participant.competition.maxParticipants}
                    </span>
                  </TableCell>
                  <TableCell className="text-indigo-300 font-bold">
                    {entry.score}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </PopoverContent>
    </Popover>
  );
};

export default SchoolCompetitionRankings;
