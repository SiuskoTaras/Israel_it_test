export interface Token {
  user_id: number;
  email: string;
  name: string;
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}
