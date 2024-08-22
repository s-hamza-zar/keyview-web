import React from "react";

import { MapPinHouse, Rabbit } from "lucide-react";
import { Label } from "../ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";

const PropertySelector = () => {
  return (
    <form className="px-2 flex items-center">
          <Select>
            <SelectTrigger
              id="model"
              className="items-center [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a property" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="genesis">
                <div className="flex items-start gap-3 text-muted-foreground">
                  {/* <MapPinHouse className="size-5" /> */}
                  <div className="grid gap-0.5">
                    <p>
                    Granite{" "}
                      <span className="font-medium text-foreground">
                      Hills
                      </span>
                    </p>
                    {/* <p className="text-xs" data-description>
                      Our fastest model for general use cases.
                    </p> */}
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
    </form>
  );
};

export default PropertySelector;
