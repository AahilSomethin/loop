
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Camera,
  Phone,
  Users,
  MessageSquare,
  Clock,
  Mic,
  Smile,
  Sticker,
  Plus,
  Send,
} from "lucide-react";

interface Message {
  id: number;
  content: string;
  timestamp: string;
  sender: "user" | "other";
  image?: string;
}

export default function ChatInterface() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi, is the watch still up for sale?",
      timestamp: "4:30 pm",
      sender: "user",
    },
    {
      id: 2,
      content: "Yes, it's available.",
      timestamp: "4:32 pm",
      sender: "other",
    },
    {
      id: 3,
      content: "Awesome! Can I see a couple of pictures?",
      timestamp: "4:45 pm",
      sender: "user",
    },
    {
      id: 4,
      content: "Sending them over now.",
      timestamp: "4:56 pm",
      sender: "other",
    },
    {
      id: 5,
      content: "",
      timestamp: "4:56 pm",
      sender: "other",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      content: "Thanks! Looks good.",
      timestamp: "4:56 pm",
      sender: "user",
    },
    {
      id: 7,
      content: "I'll take it. Can you ship it?",
      timestamp: "4:56 pm",
      sender: "user",
    },
  ]);

  return (
    <div className="flex h-screen bg-zinc-900">
      {/* Sidebar */}
      <div className="w-72 border-r border-zinc-800 flex flex-col">
        <div className="p-4 border-b border-zinc-800">
          <h1 className="text-xl font-semibold text-white">Chats</h1>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-4 bg-zinc-800/50 p-3 rounded-lg">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>GA</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  George Alan
                </p>
                <p className="text-sm text-zinc-400 truncate">
                  I&apos;ll take it. Can you ship it?
                </p>
              </div>
              <span className="text-xs text-zinc-500">4:30 PM</span>
            </div>
            <div className="flex items-center space-x-4 p-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>UC</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  Uber Cars
                </p>
                <p className="text-sm text-zinc-400 truncate">
                  Your ride is 2 minutes away. Please confirm...
                </p>
              </div>
              <span className="text-xs text-zinc-500">4:30 PM</span>
            </div>
          </div>
        </ScrollArea>
        <div className="grid grid-cols-4 border-t border-zinc-800">
          <Button
            variant="ghost"
            className="flex flex-col items-center py-4 text-zinc-400 hover:text-white"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs mt-1">Chats</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center py-4 text-zinc-400 hover:text-white"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs mt-1">Calls</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center py-4 text-zinc-400 hover:text-white"
          >
            <Users className="h-5 w-5" />
            <span className="text-xs mt-1">Users</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center py-4 text-zinc-400 hover:text-white"
          >
            <Clock className="h-5 w-5" />
            <span className="text-xs mt-1">Groups</span>
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>GA</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-white font-medium">George Alan</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white"
            >
              <Camera className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 text-white"
                  }`}
                >
                  {message.image ? (
                    <img
                      src={message.image}
                      alt="Watch"
                      className="rounded-lg max-w-full h-auto"
                    />
                  ) : (
                    <p>{message.content}</p>
                  )}
                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-zinc-800">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white"
            >
              <Plus className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Type your message..."
              className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
            />
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <Mic className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <Smile className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <Sticker className="h-5 w-5" />
              </Button>
              <Button size="icon" className="bg-purple-600 hover:bg-purple-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

