import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (MutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(MutationFunction);

  const mutate = async (payload: any) => {
    setPending(true);
    try {
      const result = await apiMutation(payload);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setPending(false);
    }
  };

  return {
    mutate,
    pending,
  };
};
