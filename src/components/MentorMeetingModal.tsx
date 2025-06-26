import React, { useState } from 'react';

interface MentorMeetingModalProps {
  onConfirm: () => void;
}

const MentorMeetingModal: React.FC<MentorMeetingModalProps> = ({ onConfirm }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
        <div className="absolute -top-8 left-0 right-0 flex justify-center">
          <div className="bg-orange-500 text-white font-bold px-8 py-2 rounded-full text-center text-lg shadow-lg">
            IMPORTANT INFORMATION FOR YOU
          </div>
        </div>
        <div className="mt-8">
          <p>1 Dear Student,</p>
          <p className="text-lg font-bold text-red-700 mt-2 mb-2">Your monthly mentor meeting rating is pending.</p>
          <p>
            You are required to submit your rating and feedback about your monthly mentor meeting.<br />
            Link --&gt; <a href="#" className="text-blue-600 underline">Click Here to submit your Rating !</a>
          </p>
          <p className="mt-2">
            Pathway for submitting rating :: <b>Student Services -&gt; Feedback &amp; Surveys -&gt; Rate Mentor Meeting</b>
          </p>
        </div>
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="readInfo"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="readInfo">I have read this information</label>
        </div>
        <button
          className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold disabled:opacity-50"
          disabled={!checked}
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default MentorMeetingModal; 