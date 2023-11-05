type Dependencies = {
  log: (message: string) => void;
};

export const GREETING_PREFIX = "Hi!";

export const main = ({ log }: Dependencies) => {
  log(GREETING_PREFIX);
};
