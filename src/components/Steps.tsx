import { Step } from "./Step";

export function Steps({ currentStep }: { currentStep: number }) {
  return (
    <ol aria-label="Errores mas comunes">
      <Step
        name="Envio"
        isCompleted={currentStep > 1}
        isActive={currentStep === 1}
      />
      <Step
        name="Pago"
        isCompleted={currentStep > 2}
        isActive={currentStep === 2}
      />
      <Step
        name="Confirmación de compra"
        isActive={currentStep === 3}
        isCompleted={currentStep > 3}
      />
    </ol>
  );
}
