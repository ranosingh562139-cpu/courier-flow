import { useState, FormEvent } from "react";
import { Package, Truck, CheckCircle2, Clock, MapPin, Phone, User, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type FormData = {
  name: string;
  phone: string;
  trackingId: string;
  service: string;
  address: string;
};

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    trackingId: "",
    service: "",
    address: "",
  });

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.phone || !data.trackingId || !data.service || !data.address) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setData({ name: "", phone: "", trackingId: "", service: "", address: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT: Form */}
        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-lg">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-soft)]">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">SwiftShip</h1>
                <p className="text-xs text-muted-foreground">Courier address update</p>
              </div>
            </div>

            <div
              key={submitted ? "confirm" : "form"}
              className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold tracking-tight">Update delivery details</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Make sure your courier reaches the right address.
                    </p>
                  </div>

                  <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="pl-9"
                          value={data.name}
                          onChange={(e) => setData({ ...data, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            inputMode="numeric"
                            placeholder="98765 43210"
                            className="pl-9"
                            value={data.phone}
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tracking">Tracking ID</Label>
                        <div className="relative">
                          <Hash className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="tracking"
                            placeholder="SS-1029384"
                            className="pl-9"
                            value={data.trackingId}
                            onChange={(e) => setData({ ...data, trackingId: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Courier service</Label>
                      <Select
                        value={data.service}
                        onValueChange={(v) => setData({ ...data, service: v })}
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a courier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DHL">DHL</SelectItem>
                          <SelectItem value="FedEx">FedEx</SelectItem>
                          <SelectItem value="BlueDart">BlueDart</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Delivery address</Label>
                      <Textarea
                        id="address"
                        rows={4}
                        placeholder="Street, city, state, ZIP"
                        value={data.address}
                        onChange={(e) => setData({ ...data, address: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-success/40 text-success hover:bg-success/10 hover:text-success"
                      >
                        Next
                      </Button>
                      <Button
                        type="submit"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)]"
                      >
                        Update
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-6">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[image:var(--gradient-success)] shadow-[var(--shadow-soft)]">
                    <CheckCircle2 className="h-10 w-10 text-success-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Thank You!</h2>
                  <p className="mt-2 text-base font-medium">Your Address has been Updated</p>
                  <div className="mt-5 flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
                    <Clock className="h-4 w-4" />
                    Please Wait for 24 Hours
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    You will receive update within 24 hours.
                  </p>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="mt-8"
                  >
                    Update another shipment
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RIGHT: Brand panel */}
        <aside className="relative hidden overflow-hidden bg-[image:var(--gradient-panel)] lg:block">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative flex h-full flex-col justify-between p-14 text-primary-foreground">
            <div className="flex items-center gap-2 text-sm font-medium opacity-90">
              <Package className="h-5 w-5" />
              Trusted by 2M+ shippers worldwide
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                Delivered with<br />precision &amp; care.
              </h2>
              <p className="max-w-md text-lg opacity-90">
                Update your delivery details in seconds. We&apos;ll keep you posted at every stop along the way.
              </p>

              <div className="grid max-w-md grid-cols-3 gap-4 pt-6">
                {[
                  { label: "On-time", value: "99.2%" },
                  { label: "Countries", value: "120+" },
                  { label: "Support", value: "24/7" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-xs opacity-80">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm opacity-90">
              <MapPin className="h-4 w-4" />
              Real-time tracking across DHL, FedEx &amp; BlueDart
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Index;
