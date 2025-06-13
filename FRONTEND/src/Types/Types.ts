interface judges {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  judge: judge;
}

interface judge {
  nationalId: string;
  id: string;
}
export interface JudgeData {
  judges: judges[];
  nextCursor: string;
}

export interface CreateCompetitonsPayload {
  name: string;
  venue: string;
  schedule: string;
  description: string;
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
  competitionId: string;
  schedule: string;
}

export interface DeleteJudge {
  judgeId: string;
  competitionId: string;
}
