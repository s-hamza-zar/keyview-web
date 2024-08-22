import React from "react";
import { Badge } from "../ui/Badge";
import { MapPinHouse } from "lucide-react";

const PropertyBadge = () => {
  return (
    <Badge className="rounded-lg p-2 px-4">
      <MapPinHouse className="size-5" />
      Granite Hills
    </Badge>
  );
};

export default PropertyBadge;
