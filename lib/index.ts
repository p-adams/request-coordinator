import requestCoordinator from "./requestCoordinator.ts";

function main() {
  const fetchData = requestCoordinator({
    request: async () => {
      await fetch("").then((res) => res.json());
    },
    // 5 requests per 10 minutes
    options: { frequency: 5, constraint: 10 },
  });
}

main();
