import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Sparkles } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-cream-50 border border-latte-300 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-espresso-700 hover:text-espresso-950 hover:bg-latte-200 transition-colors"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-copper-500/10 text-copper-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-espresso-950 mb-2">
              Table Reservation Requested!
            </h3>
            <p className="text-sm text-espresso-700 leading-relaxed max-w-sm mx-auto mb-6">
              Thank you, <strong>{name || 'valued guest'}</strong>. We have received your booking request for <strong>{guests} guests</strong> on <strong>{date || 'selected date'}</strong> at <strong>{time}</strong>. Our team will send a quick confirmation to <strong>{phone}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-espresso-900 text-cream-50 text-xs uppercase tracking-widest font-semibold hover:bg-copper-600 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-1.5 text-copper-600 text-[10px] uppercase tracking-widest font-bold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Sanctuary of Slow Moments</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso-950">
                Reserve a Table
              </h3>
              <p className="text-xs text-espresso-600 mt-1">
                Amayra Emporio • Kharar, Punjab
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso-800 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jasleen Kaur"
                    className="w-full px-3 py-2.5 bg-cream-100 border border-latte-300 text-sm text-espresso-950 focus:outline-none focus:border-copper-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso-800 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="098771 69296"
                    className="w-full px-3 py-2.5 bg-cream-100 border border-latte-300 text-sm text-espresso-950 focus:outline-none focus:border-copper-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso-800 mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-copper-600" />
                    <span>Guests</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2.5 bg-cream-100 border border-latte-300 text-sm text-espresso-950 focus:outline-none focus:border-copper-500"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5-6">5-6 People</option>
                    <option value="7+">7+ Large Table</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso-800 mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-copper-600" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-cream-100 border border-latte-300 text-sm text-espresso-950 focus:outline-none focus:border-copper-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso-800 mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-copper-600" />
                    <span>Time</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 bg-cream-100 border border-latte-300 text-sm text-espresso-950 focus:outline-none focus:border-copper-500"
                  >
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:30">06:30 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="21:30">09:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso-800 mb-1">
                  Special Occasion or Seating Preference (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="e.g. Quiet window table, birthday dessert note, etc."
                  className="w-full px-3 py-2 bg-cream-100 border border-latte-300 text-sm text-espresso-950 focus:outline-none focus:border-copper-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-espresso-900 text-cream-50 text-xs uppercase tracking-widest font-semibold hover:bg-copper-600 transition-colors shadow-md"
                >
                  Confirm Reservation Request
                </button>
              </div>

              <p className="text-[11px] text-center text-espresso-600">
                For immediate table assistance, call us at <a href="tel:09877169296" className="text-copper-700 font-semibold underline">098771 69296</a>.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
