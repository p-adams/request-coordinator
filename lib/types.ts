export interface RequestCoordinatorParams {
  request: () => void;
  options: {
    frequency: number;
    // IN MINUTES
    constraint: number;
  };
}
