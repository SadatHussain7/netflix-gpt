import OpenAI from "openai";
// import { MY_OPENAI_API_KEY, MY_OPENAI_ORG_ID } from "./Constants";


export const MY_OPENAI_API_KEY = process.env.REACT_APP_MY_OPENAI_API_KEY;
export const MY_OPENAI_ORG_ID = process.env.REACT_APP_MY_OPENAI_ORG_ID;
export const OLD_OPENAI_API_KEY = process.env.REACT_APP_OLD_OPENAI_API_KEY;

const openai = new OpenAI({
  organization: MY_OPENAI_ORG_ID,
  apiKey: MY_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
