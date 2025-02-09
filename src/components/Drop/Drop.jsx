import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Paintbrush, Play } from "lucide-react";

function AccordionDemo() {
  return (
    <div className="bg-[#09090B] p-6">
      <Accordion 
        type="single" 
        collapsible 
        className="w-full max-w-2xl mx-auto space-y-4"
      >
        <AccordionItem 
          value="item-1" 
          className="border border-[#FAFAFA]/10 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-4 hover:bg-[#FAFAFA]/5">
            <div className="flex items-center gap-3 text-[#FAFAFA]">
              <CheckCircle className="w-5 h-5" />
              <span>Is it accessible?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 text-[#FAFAFA]/80">
            <div className="flex flex-col gap-4 py-2">
              <img 
                src="https://i.pinimg.com/736x/28/94/54/2894542729905c84629d001a68278043.jpg" 
                alt="Accessibility demonstration" 
                className="rounded-md w-full object-cover"
              />
              <p>
                Yes. It adheres to the WAI-ARIA design pattern, ensuring compatibility 
                with screen readers and keyboard navigation. Our implementation includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ARIA labels and roles</li>
                <li>Keyboard focus management</li>
                <li>High contrast visual indicators</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="item-2" 
          className="border border-[#FAFAFA]/10 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-4 hover:bg-[#FAFAFA]/5">
            <div className="flex items-center gap-3 text-[#FAFAFA]">
              <Paintbrush className="w-5 h-5" />
              <span>Is it styled?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 text-[#FAFAFA]/80">
            <div className="flex flex-col gap-4 py-2">
              <img 
                src="/api/placeholder/600/300" 
                alt="Styling demonstration" 
                className="rounded-md w-full object-cover"
              />
              <p>
                Yes. It comes with default styles that match the other components' 
                aesthetic, featuring:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom color schemes</li>
                <li>Responsive design</li>
                <li>Smooth transitions</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="item-3" 
          className="border border-[#FAFAFA]/10 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-4 hover:bg-[#FAFAFA]/5">
            <div className="flex items-center gap-3 text-[#FAFAFA]">
              <Play className="w-5 h-5" />
              <span>Is it animated?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 text-[#FAFAFA]/80">
            <div className="flex flex-col gap-4 py-2">
              <img 
                src="/api/placeholder/600/300" 
                alt="Animation demonstration" 
                className="rounded-md w-full object-cover"
              />
              <p>
                Yes. It's animated by default, with smooth transitions and 
                micro-interactions including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Smooth height transitions</li>
                <li>Icon rotation animations</li>
                <li>Hover state effects</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionDemo;