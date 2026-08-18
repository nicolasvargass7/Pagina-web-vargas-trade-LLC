import { Building2, CircuitBoard, HandshakeIcon, MapPinned } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TRUST_STRIP } from "@/lib/constants";

const icons = [Building2, CircuitBoard, HandshakeIcon, MapPinned];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-alt py-10">
      <Container>
        <StaggerGroup
          as="ul"
          className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          stagger={0.08}
        >
          {TRUST_STRIP.map((item, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={item} as="li" className="flex items-center gap-3">
                <Icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-text-secondary">{item}</span>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
