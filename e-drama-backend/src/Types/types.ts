export interface UserType {
  name: string;
  email: string;
  password: string;
  county: string;
  role: "ADMIN" | "JUDGE" | "SCHOOL";
}

export interface CreateCompetitonsPayload {
  name: string;
  venue: string;
  schedule: string;
  description: string;
  judgeId: string[];
}

export interface JudgeType {
  name: string;
  email: string;
  role: "ADMIN" | "JUDGE" | "SCHOOL";
}
