function ProjectFilters({
  activeFilter,
  filters,
  label,
  onFilterChange,
}) {
  return (
    <div className="project-filters" aria-label={label} role="group">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className="project-filter"
          aria-pressed={activeFilter === filter.id}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilters
