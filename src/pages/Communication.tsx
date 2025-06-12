
import { PronunciationTool } from "@/components/communication/PronunciationTool";

const Communication = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Communication Skills</h2>
        <p className="text-muted-foreground">Improve your spoken English with AI-powered tools</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PronunciationTool />
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-xl border h-full">
            <h3 className="font-semibold mb-3">Practice Tips</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Speak clearly and at a moderate pace</li>
              <li>Pay attention to word stress and intonation</li>
              <li>Record yourself reading aloud daily</li>
              <li>Listen to native English speakers</li>
              <li>Focus on problem sounds and practice them</li>
            </ul>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Weekly Challenge</h3>
              <p className="text-sm">Record yourself reading a news article for 5 minutes each day this week. Track your improvement!</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <a href="#" className="text-edubridge-blue hover:underline">English Pronunciation Guide</a>
                </li>
                <li className="text-sm">
                  <a href="#" className="text-edubridge-blue hover:underline">10 Common Pronunciation Mistakes</a>
                </li>
                <li className="text-sm">
                  <a href="#" className="text-edubridge-blue hover:underline">Video: Improving Your Fluency</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
