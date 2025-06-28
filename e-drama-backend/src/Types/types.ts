export interface UserType {
  name: string;
  email: string;
  password: string;
  county: string;
  role: "ADMIN" | "JUDGE" | "SCHOOL";
}

export interface CreateCompetitonsPayload {
  name: string;
  location: string;
  time: Date;
  description: string;
  judgeId: string[];
  status: "UPCOMING" | "ACTIVE" | "COMPLETED";
  maxSchools: string;
}

export interface JudgeType {
  name: string;
  email: string;
  role: "ADMIN" | "JUDGE" | "SCHOOL";
}
