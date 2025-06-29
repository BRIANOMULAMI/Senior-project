export interface RegisterType {
  name: string;
  email: string;
  password: string;
  county: string;
}

type judges = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  judge: judge;
};

type Count = {
  _count: {
    competitions: number;
  };
};

type judge = {
  nationalId: string;
  id: string;
  assignedCompetitions: Count;
};
export type JudgeData = {
  judges: judges[];
  nextCursor: string;
};

export interface CreateCompetitonsPayload {
  name: string;
  location: string;
  time: Date;
  maxSchools: string;
  description: string;
  status: "UPCOMING" | "ACTIVE" | "COMPLETED";
  judgeId: string[];
}

export interface HandleErrorsType {
  e: Error;
  message?: string;
}

export interface UpdateCompetitionPayload {
  description: string;
  name: string;
  venue: string;
  id: string;
  schedule: string;
  status: "UPCOMING" | "ACTIVE" | "COMPLETED";
  maxParticipants: string;
}

export interface DeleteJudge {
  judgeId: string;
  competitionId: string;
}

export interface CreateJudgeType {
  name: string;
  email: string;
  password?: string;
  nationalId: string;
  assignedCompetitions: string[];
}

export type JudgeUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  judge: {
    nationalId: string;
    id: string;
    _count: {
      competitions: number;
    };
  };
};
// export type JUDGESType = {
//   judges: JudgeUser[];
//   nextCursor?: string | null;
// };

export interface FestivalJudge {
  id: string;
  nationalId: string;
  userId: string;
}

export interface FestivalEvent {
  name: string;
  id: string;
  description: string;
  schedule: string; // ISO 8601 string; use Date if needed
  judges: FestivalJudge[];
  maxParticipants: string;
  status: "UPCOMING" | "ACTIVE" | "COMPLETED";
  venue: string;
}

export type AvailableJudge = {
  id: string;
  nationalId: string;
  userId: string;
  user: {
    name: string;
    email: string;
  };
  _count: {
    competitions: number;
  };
};

type CompetitionStatus = "UPCOMING" | "ACTIVE" | "COMPLETED";

export interface JudgeCompetitionRespone {
  id: string;
  name: string;
  schedule: string;
  description: string;
  venue: string;
  maxParticipants: number;
  status: CompetitionStatus;
  totalParticipants: number;
}

type Participant = {
  createdAt: string; // ISO date string
  status: "PENDING" | "APPROVED" | "REJECTED"; // extend as needed
};

export type CompetitionData = {
  name: string;
  schedule: string; // ISO date string
  totalParticipants: number;
  participants: Participant[];
};

export type CompetitionRequest = {
  competition: {
    id: string;
    name: string;
    participants: {
      status: "PENDING" | "APPROVED" | "REJECTED";
    }[];
  };
  school: {
    user: {
      name: string;
    };
  };
};

export interface PerfomersResponse {
  id: string;
  competition: {
    name: string;
  };
  school: {
    user: {
      name: string;
      email: string;
    };
  };
}

export interface AwardMarksProps {
  id: string;
  score: string;
  comment: string;
}

export interface AwardedMarksResponse {
  comments: string;
  createdAt: string;
  score: number;
  id: string;
  participant: {
    competition: {
      name: string;
    };
    school: {
      user: {
        name: string;
      };
    };
  };
}

export interface SchoolCompetitionResultsResponse {
  id: string;
  score: number;
  comments: string;
  participant: {
    school: {
      user: {
        name: string;
      };
    };
    competition: {
      name: string;
      id: string;
    };
  };
}

export type CompetitionJudgesResponse = {
  id: string;
  user: {
    name: string;
    email: string;
  };
  _count: {
    competitions: number;
  };
};

export type AdminStatisticsResponse = {
  competitionCount: number;
  judgesCount: number;
  pendingRequests: number;
  approvedRequests: number;
  deniedRequest: number;
};

export type JudgeWithCompetitionsResponse = {
  id: string;
  email: string;
  name: string;
  competitions: {
    id: string;
    name: string;
  }[];
};

export type SchoolStatisticsReport = {
  TotalApplications: number;
  ApprovedApplications: number;
  PendingApplications: number;
  TotalPerformances: number;
  AverageScore: number;
};

export type JudgeStaticsReport = {
  TotalCompetitionsAssigned: number;
  TotalMarksAwarded: number;
  AverageScore: number;
};

export type CompetitionRankingResponse = {
  id: string;
  score: number;
  participant: {
    competition: {
      name: string;
      maxParticipants: number;
    };
    school: {
      user: {
        name: string;
      };
    };
  };
};
