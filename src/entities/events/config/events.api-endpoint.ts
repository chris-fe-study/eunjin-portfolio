const versionPrefix = {
  events: "events",
};

export const eventApiEndpoint = {
  events: () => `/${versionPrefix.events}`,
  eventsBanner: () => `/${versionPrefix.events}/banner`,
};
