// pages/index.tsx
"use client"
import { useActionState, useState } from 'react';
import ResumeForm from './components/resumeform';
import ResumePreview from './components/resumePreview';
import ExportButton from './components/exportButton';


type FormData = {
  name: string;
  email: string;
  education: string;
  experience: string;
  skills: string;
};

export default function Home() {
  const [resumeData, setResumeData] = useState<FormData>({
    name: '',
    email: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleFormSubmit = (data: FormData) => {
    setResumeData(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResumeForm onSubmit={handleFormSubmit} />
        <div>
          <ResumePreview data={resumeData} />
          <div className="mt-4">
            <ExportButton targetId="resume-preview" />
          </div>
        </div>
      </div>
    </div>
  );
}