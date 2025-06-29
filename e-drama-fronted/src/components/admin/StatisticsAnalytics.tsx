import { UseAdminGetAllCompetitions } from "@/Api/Competition";
import {
  UseAdminGetCountReports,
  UseAdminGetJudgesWithCompetitions,
} from "@/Api/Reports";
import { Loader2Icon } from "lucide-react";
import React from "react";

const StatisticsAnalytics: React.FC = () => {
  const { data: COUNT_DATA, isLoading: COUNT_DATA_LOADING } =
    UseAdminGetCountReports();

  const { data: COMPETITIONS, isLoading: COMPETITIONS_LOADING } =
    UseAdminGetAllCompetitions();
  const { data: JUDGES, isLoading: JUDGES_LOADING } =
    UseAdminGetJudgesWithCompetitions();

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Statistics & Analytics
      </h2>
      {COUNT_DATA_LOADING ? (
        <Loader2Icon className="animate-spin mx-auto" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
            <p className="text-5xl font-extrabold text-indigo-400">
              {COUNT_DATA?.competitionCount}
            </p>
            <p className="text-gray-300 mt-2 text-lg">Total Competitions</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
            <p className="text-5xl font-extrabold text-green-400">
              {COUNT_DATA?.judgesCount}
            </p>
            <p className="text-gray-300 mt-2 text-lg">Total Judges</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
            <p className="text-5xl font-extrabold text-yellow-400">
              {COUNT_DATA?.pendingRequests}
            </p>
            <p className="text-gray-300 mt-2 text-lg">
              Pending School Requests
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
            <p className="text-5xl font-extrabold text-blue-400">
              {COUNT_DATA?.approvedRequests}
            </p>
            <p className="text-gray-300 mt-2 text-lg">
              Approved School Requests
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
            <p className="text-5xl font-extrabold text-red-400">
              {COUNT_DATA?.deniedRequest}
            </p>
            <p className="text-gray-300 mt-2 text-lg">Denied School Requests</p>
          </div>
        </div>
      )}

      {/* Detailed view example (expandable in a real app) */}
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">
        Competition Overview
      </h3>
      {COMPETITIONS_LOADING ? (
        <Loader2Icon className="mx-auto animate-spin" />
      ) : COMPETITIONS?.length === 0 ? (
        <p className="text-gray-400">No competition data to display.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-300">
          {COMPETITIONS?.map((comp) => (
            <li key={comp.id} className="mb-1">
              <span className="font-semibold">{comp.name}</span> at {comp.venue}{" "}
              ({comp.maxParticipants} schools max)
            </li>
          ))}
        </ul>
      )}

      <h3 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
        Judge Assignments
      </h3>
      {JUDGES_LOADING ? (
        <Loader2Icon className="mx-auto animate-spin" />
      ) : JUDGES?.length === 0 ? (
        <p className="text-gray-400">No judge data to display.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-300">
          {JUDGES?.map((judge) => (
            <li key={judge.id} className="mb-1">
              <span className="font-semibold">{judge.name}</span> ({judge.email}
              ) assigned to:{" "}
              {judge.competitions.length > 0
                ? judge.competitions.map((c) => c.name).join(", ")
                : "None"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatisticsAnalytics;
