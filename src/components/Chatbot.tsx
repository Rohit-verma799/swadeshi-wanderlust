import { useState, useEffect, useRef } from 'react';
// Import the Google Generative AI package
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

// --- DANGEROUS: Do NOT do this in a public website ---
// Your API key is exposed to anyone visiting your site.
const API_KEY = "AIzaSyAlco9tUsLDGbly-NYNM8P4GxyTZKj8jC8"; 

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I am a Swadeshi travel assistant. How can I help?",
      isBot: true,
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // --- Call the Gemini API directly from the frontend ---
      const prompt = `You are a helpful travel assistant for a company called Swadeshi Travel. Your goal is to help users plan their trips in India. Be friendly and concise. User's question: "${inputText}"`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const botMessage: Message = {
        id: Date.now() + 1,
        text: text,
        isBot: true,
      };
      
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Error generating content:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the AI. Please check the API key and configuration.",
        isBot: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* ... The rest of your JSX remains exactly the same ... */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-floating hover:shadow-card transition-all duration-300 z-40 ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-floating z-50 flex flex-col">
          <CardHeader className="pb-3">
             <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Bot className="w-5 h-5 text-primary" />
                <span>Travel Assistant</span>
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto space-y-3 scrollbar-thin">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${message.isBot ? 'bg-muted text-muted-foreground' : 'bg-primary text-primary-foreground'}`}>
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <span className="flex-1">{message.text}</span>
                    {!message.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-muted text-muted-foreground">
                      <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="flex items-center space-x-1">
                              <span className="animate-pulse">.</span>
                              <span className="animate-pulse [animation-delay:0.2s]">.</span>
                              <span className="animate-pulse [animation-delay:0.4s]">.</span>
                          </span>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          
          <CardFooter className="pt-3">
            <div className="flex w-full space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about travel..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button onClick={handleSendMessage} size="sm" className="px-3" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default Chatbot;