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
              <span>How to contact me?</span>
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
                I read my emails, feel free to send me one at:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>a_belmehnouf@estin.dz</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="item-2" 
          className="border border-[#FAFAFA]/10 rounded-lg overflow-hidden"
        >
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionDemo;