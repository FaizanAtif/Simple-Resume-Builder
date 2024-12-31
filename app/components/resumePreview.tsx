// components/ResumePreview.tsx
"useClient"
import React from 'react';

type ResumeData = {
  name: string;
  email: string;
  education: string;
  experience: string;
  skills: string;
};

type ResumePreviewProps = {
  data: ResumeData;
};

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div id="resume-preview" className="p-4 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-600">{data.email}</p>
      <h2 className="text-xl font-bold mt-4">Education</h2>
      <p className="text-gray-700">{data.education}</p>
      <h2 className="text-xl font-bold mt-4">Work Experience</h2>
      <p className="text-gray-700">{data.experience}</p>
      <h2 className="text-xl font-bold mt-4">Skills</h2>
      <p className="text-gray-700">{data.skills}</p>
    </div>
  );
};

export default ResumePreview;