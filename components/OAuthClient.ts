import { createGitHubOAuth2Client } from "kv_oauth";
import { type OAuth2ClientConfig } from "oauth2_client";

const additionalOAuth2ClientConfig: Partial<OAuth2ClientConfig> = {
  redirectUri: "http://localhost:8000/callback",
}

export const oauth2Client = createGitHubOAuth2Client(additionalOAuth2ClientConfig);
