export default function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="d-flex align-items-start gap-3 mb-4">
      <div className="section-icon d-flex align-items-center justify-content-center rounded-4">
        <Icon size={20} />
      </div>
      <div>
        <h2 className="fw-bold mb-1 section-title-text">{title}</h2>
        <p className="text-secondary mb-0">{subtitle}</p>
      </div>
    </div>
  );
}