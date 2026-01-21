import { WizardForm } from './WizardForm';

export const RegistrationPage = () => {
    return (
        <div className="min-h-screen bg-titanus-black flex items-center justify-center p-4">
            <WizardForm isStandalone={true} />
        </div>
    );
};
