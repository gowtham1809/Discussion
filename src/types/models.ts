
export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  accounts?: Account[];
  sessions?: Session[];
  posts?: Post[];
  comments?: Comment[];
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  user?: User;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user?: User;
}

export interface VerificationToken {
  id: string;
  identifier: string;
  token: string;
  expires: Date;
}

export interface Topic {
  id: string;
  slug: string;
  description: string;
  createdAt: Date;
  posts?: Post[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  topicId: string;
  createdAt: Date;
  user?: User;
  topic?: Topic;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  postId: string;
  userId: string;
  parentId?: string | null;
  createdAt: Date;
  parent?: Comment | null;
  post?: Post;
  user?: User;
  children?: Comment[];
}
