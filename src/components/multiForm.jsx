import { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Step 1: Name</h2>
            <input
              className="w-full p-2 border mb-4 rounded"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Step 2: Email</h2>
            <input
              className="w-full p-2 border mb-4 rounded"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
              <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Step 3: Password</h2>
            <input
              type="password"
              className="w-full p-2 border mb-4 rounded"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
