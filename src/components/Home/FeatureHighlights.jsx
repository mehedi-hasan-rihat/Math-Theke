export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-lg transition">
      <div className="text-red-500">
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}
