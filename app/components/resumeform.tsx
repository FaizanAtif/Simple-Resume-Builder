// components/ResumeForm.tsx
"useClient"
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  education: string;
  experience: string;
  skills: string;
};

type ResumeFormProps = {
  onSubmit: SubmitHandler<FormData>;
};

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input {...register('name')} className="mt-1 block w-full border border-gray-500 p-2 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input {...register('email')} className="mt-1 block w-full border border-gray-500 p-2 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Education</label>
        <textarea {...register('education')} className="mt-1 block w-full border border-gray-500 p-2 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Work Experience</label>
        <textarea {...register('experience')} className="mt-1 block w-full border border-gray-500 p-2 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <textarea {...register('skills')} className="mt-1 block w-full border border-gray-500 p-2 rounded-md" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Update Resume
      </button>
    </form>
  );
};

export default ResumeForm;