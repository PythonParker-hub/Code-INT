import useMeetingActions from "@/hooks/useMeetingActions";
import { Doc } from "../../convex/_generated/dataModel";
import { getMeetingStatus } from "@/lib/utils";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CalendarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Interview = Doc<"interviews">;

function MeetingCard({ interview }: { interview: Interview }) {
  const { joinMeeting } = useMeetingActions();

  const status = getMeetingStatus(interview);
  const formattedDate = format(new Date(interview.startTime), "EEEE, MMMM d · h:mm a");

  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            {formattedDate}
          </div>

          <Badge
            variant={
              status === "đang diễn ra" ? "default" : status === "sắp diễn ra" ? "secondary" : "outline"
            }
          >
            {status === "đang diễn ra" ? "Đang diễn ra" : status === "sắp diễn ra" ? "Sắp diễn ra" : "Đã kết thúc"}
          </Badge>
        </div>

        <CardTitle>{interview.title}</CardTitle>

        {interview.description && (
          <CardDescription className="line-clamp-2">{interview.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        {status === "đang diễn ra" && (
          <Button className="w-full" onClick={() => joinMeeting(interview.streamCallId)}>
            Tham gia cuộc họp
          </Button>
        )}

        {status === "sắp diễn ra" && (
          <Button variant="outline" className="w-full" disabled>
            Chưa sẵn sàng
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
export default MeetingCard;