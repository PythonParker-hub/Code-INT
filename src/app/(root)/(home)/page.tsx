"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";

export default function Home() {
  const router = useRouter();

  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interview.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "Cuộc họp mới":
        setModalType("start");
        setShowModal(true);
        break;
      case "Tham dự buổi phỏng vấn":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/* WELCOME SECTION */}
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0070BA] to-[#00AEEF] bg-clip-text text-transparent">
          Chào mừng đến với Code-INT !
        </h1>
        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Quản lý các cuộc phỏng vấn và đánh giá ứng viên một cách hiệu quả"
            : "Truy cập các cuộc phỏng sắp tới của bạn"}
        </p>
      </div>

      {isInterviewer ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Tham gia cuộc họp" : "Bắt đầu cuộc họp"}
            isJoinMeeting={modalType === "join"}
          />
        </>
      ) : (
        <>
          <div>
            <h1 className="text-3xl font-bold">Cuộc phỏng vấn của bạn</h1>
            <p className="text-muted-foreground mt-1">Xem và tham gia các cuộc phỏng vấn của bạn</p>
          </div>

          <div className="mt-8">
            {interviews === undefined ? (
              <div className="flex justify-center py-12">
                <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <MeetingCard key={interview._id} interview={interview} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Hiện đang không có lịch phỏng vấn nào
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}