export interface IForumSection {
  id: number;
  title: string;
  subsections: IForumSubsection[];
}

export interface IForumSubsection {
  id: number;
  title: string;
  forum_section_id: number;
  threads?: IForumThread[];
}


export interface IForumThread {
  id: number;
  title: string;
  forum_subsection_id: number;
  posts?: IForumPost[];
}

export interface IForumPost {
  id: number;
  author: Partial<IUser>;
  forum_thread_id: number;
  text: string;
  timestamp: number;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  role: string;
  avatar: string;
}

export interface ITokens {
  access_token: string;
  refresh_token: string;
}
