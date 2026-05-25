import { Link } from 'react-router';
import ScoreCircle from './ScoreCircle';

// the use of props is done slightly diffrent at anchor
export default function ResumeCard({ resume: { id, companyName, jobTitle, feedback, resumeUrl, imagePath } }) {
    return (
        <Link to={`/resume/${id}`} className='resume-card animate-in fade-in duration-100'>
            <div className="flex flex-col gap-2">
                <h2 className="text-black! font-bold wrap-break-word">
                    {companyName}
                </h2>
                <h3 className="text-lg wrap-break-word text-gray-500">
                    {jobTitle}
                </h3>
            </div>
            <div className="shrink-0">
                <ScoreCircle score={feedback.overallScore}></ScoreCircle>
            </div>
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={imagePath}
                        alt="resume"
                        className="w-full h-87.5 max-sm:h-50 object-cover" />
                </div>
            </div>
        </Link>
    );
}
