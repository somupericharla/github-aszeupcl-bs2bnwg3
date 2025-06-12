
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, Square, BarChart2 } from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

export function PronunciationTool() {
  const [isRecording, setIsRecording] = useState(false);
  const [fluencyScore, setFluencyScore] = useState<number | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const maxRecordingTime = 30; // in seconds
  
  const startRecording = () => {
    setIsRecording(true);
    setFluencyScore(null);
    setRecordingTime(0);
    
    // Simulate recording timer
    const timer = setInterval(() => {
      setRecordingTime(prev => {
        if (prev >= maxRecordingTime) {
          clearInterval(timer);
          stopRecording();
          return maxRecordingTime;
        }
        return prev + 1;
      });
    }, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  };
  
  const stopRecording = () => {
    setIsRecording(false);
    
    // Simulate AI analysis with a random score
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 5) + 6; // Random score between 6-10
      setFluencyScore(randomScore);
    }, 1500);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const getFluencyFeedback = (score: number) => {
    if (score >= 9) return "Excellent pronunciation with native-like fluency.";
    if (score >= 7) return "Good pronunciation with occasional minor errors.";
    return "Developing pronunciation. Focus on word stress and intonation.";
  };
  
  // Sample practice sentences
  const practiceSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "I saw Susie sitting in a shoe shine shop.",
    "Peter Piper picked a peck of pickled peppers."
  ];
  
  const randomSentence = practiceSentences[Math.floor(Math.random() * practiceSentences.length)];
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Pronunciation Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="practice" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="practice" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h3 className="font-medium">Practice Sentence</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-center p-4 border rounded-md bg-muted/20">
                  "{randomSentence}"
                </p>
                
                {isRecording && (
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Recording</span>
                      <span>{formatTime(recordingTime)} / {formatTime(maxRecordingTime)}</span>
                    </div>
                    <Progress value={(recordingTime / maxRecordingTime) * 100} className="h-2" />
                    <div className="flex justify-center mt-2">
                      <div className="animate-pulse flex space-x-1">
                        <div className="h-2 w-1 bg-red-500 rounded"></div>
                        <div className="h-3 w-1 bg-red-500 rounded"></div>
                        <div className="h-4 w-1 bg-red-500 rounded"></div>
                        <div className="h-5 w-1 bg-red-500 rounded"></div>
                        <div className="h-4 w-1 bg-red-500 rounded"></div>
                        <div className="h-3 w-1 bg-red-500 rounded"></div>
                        <div className="h-2 w-1 bg-red-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center mt-6">
                  {!isRecording ? (
                    <Button
                      onClick={startRecording}
                      className="bg-edubridge-purple hover:bg-edubridge-purple-secondary"
                    >
                      <Mic className="mr-2 h-4 w-4" /> Start Recording
                    </Button>
                  ) : (
                    <Button
                      onClick={stopRecording}
                      variant="destructive"
                    >
                      <Square className="mr-2 h-4 w-4" /> Stop Recording
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results">
            <Card>
              <CardHeader className="pb-2">
                <h3 className="font-medium">Pronunciation Analysis</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {fluencyScore ? (
                  <>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 rounded-full border-8 border-edubridge-purple flex items-center justify-center">
                        <span className="text-4xl font-bold">{fluencyScore}/10</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Fluency</h4>
                        <Progress value={fluencyScore * 10} className="h-2" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Pronunciation</h4>
                        <Progress value={(fluencyScore - 1) * 10} className="h-2" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Intonation</h4>
                        <Progress value={(fluencyScore + 1) * 10 > 100 ? 100 : (fluencyScore + 1) * 10} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-md">
                      <h4 className="font-medium">Feedback</h4>
                      <p className="mt-1">{getFluencyFeedback(fluencyScore)}</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="bg-edubridge-blue hover:bg-edubridge-blue-bright">
                        <BarChart2 className="mr-2 h-4 w-4" /> View Weekly Progress
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">Record your pronunciation first to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
