import { useState, FormEvent } from "react";
import { Package, Truck, CheckCircle2, Clock, MapPin, Phone, User, Hash, Shield, Globe2, Headphones } from "lucide-react";
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
import courierHero from "@/assets/courier-hero.jpg";

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
      {/* Top navigation */}
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] shadow-[var(--shadow-soft)]">
              <Truck className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-lg font-bold tracking-tight text-foreground lg:text-primary-foreground">
              SwiftShip<span className="text-success">.</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-primary-foreground/90 lg:flex">
            <a href="#" className="hover:text-primary-foreground">Track</a>
            <a href="#" className="hover:text-primary-foreground">Services</a>
            <a href="#" className="hover:text-primary-foreground">Support</a>
            <a href="#" className="hover:text-primary-foreground">Contact</a>
          </nav>
          <Button variant="outline" size="sm" className="hidden border-white/40 bg-white/10 text-primary-foreground backdrop-blur hover:bg-white/20 hover:text-primary-foreground lg:inline-flex">
            Sign in
          </Button>
        </div>
      </header>

      <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
        {/* LEFT: Form */}
        <section className="flex items-center justify-center px-6 py-24 sm:px-10 lg:px-14">
          <div className="w-full max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Shield className="h-3.5 w-3.5" />
              Reliable Courier Services &amp; Customer Support
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Update your <span className="text-primary">delivery address</span> in seconds.
            </h1>
            <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
              Trusted by 2 million+ shippers. Fast, secure, and tracked at every step across DHL, FedEx and BlueDart.
            </p>

            <div
              key={submitted ? "confirm" : "form"}
              className="mt-8 rounded-2xl border bg-card/95 p-6 shadow-[var(--shadow-card)] backdrop-blur sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {!submitted ? (
                <form onSubmit={handleUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="pl-9 transition-shadow focus-visible:shadow-[var(--shadow-soft)]"
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
                          className="pl-9 transition-shadow focus-visible:shadow-[var(--shadow-soft)]"
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
                          className="pl-9 transition-shadow focus-visible:shadow-[var(--shadow-soft)]"
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
                        <SelectValue placeholder="Choose service" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {[
                          "DHL","FedEx","UPS","BlueDart","DTDC","India Post","Delhivery",
                          "Ecom Express","XpressBees","Aramex","USPS","Royal Mail",
                          "Canada Post","Australia Post","Hermes","Yodel","Gati",
                          "Shadowfax","Ekart","Amazon Logistics",
                        ].map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery address</Label>
                    <Textarea
                      id="address"
                      rows={4}
                      placeholder="Street, city, state, ZIP"
                      className="transition-shadow focus-visible:shadow-[var(--shadow-soft)]"
                      value={data.address}
                      onChange={(e) => setData({ ...data, address: e.target.value })}
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground transition-transform hover:bg-primary/90 hover:-translate-y-0.5 shadow-[var(--shadow-soft)]"
                    >
                      Update Address
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-6">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[image:var(--gradient-success)] shadow-[var(--shadow-soft)]">
                    <CheckCircle2 className="h-10 w-10 text-success-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Thank You!</h2>
                  <p className="mt-3 text-lg font-semibold text-primary">Your Address has been Updated</p>
                  <div className="mt-5 flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
                    <Clock className="h-4 w-4" />
                    Please wait for 24 hours
                  </div>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                    You will receive an update within 24 hours via SMS and email on your registered contact.
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

            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: Globe2, label: "120+ Countries" },
                { icon: Shield, label: "Secure & Insured" },
                { icon: Headphones, label: "24/7 Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT: Hero image panel */}
        <aside className="relative hidden overflow-hidden lg:block">
          <img
            src={courierHero}
            alt="Professional courier delivering a package next to a white delivery van"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-success/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40" />

          <div className="relative flex h-full flex-col justify-end p-10 text-primary-foreground lg:p-14">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
                <Package className="h-3.5 w-3.5" />
                Live tracking enabled
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                Delivered with<br />
                <span className="text-success-foreground/95">precision &amp; care.</span>
              </h2>
              <p className="max-w-md text-base opacity-95">
                From doorstep pickup to last-mile delivery — our network keeps your shipments moving 24/7.
              </p>

              <div className="grid max-w-md grid-cols-3 gap-3 pt-2">
                {[
                  { value: "99.2%", label: "On-time" },
                  { value: "2M+", label: "Shipments" },
                  { value: "24/7", label: "Support" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur-md"
                  >
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-xs opacity-85">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2 text-sm opacity-90">
                <MapPin className="h-4 w-4" />
                Available across DHL, FedEx &amp; BlueDart
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Index;
