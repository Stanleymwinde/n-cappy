import { z } from "zod";

export const CalculatorSchema = z.object({
  goal: z.string().min(1, "Goal is required"),
  years: z.array(z.number().min(1, "At least one year is required")),
  goalCost: z.array(z.number().min(1000, "Goal cost must be at least 1000")),
  monthlySavings: z.array(
    z.number().min(1000, "Monthly savings must be at least 1000")
  ),
  annualReturn: z.array(z.number().min(1, "Annual return must be at least 1")),
});
export type CalculatorFormValues = z.infer<typeof CalculatorSchema>;
