"use client";

import { useState } from "react";
import { Project } from "@/lib/projects";
import Button from "@/components/Button";
import Link from "next/link";

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    link: "",
    github: "",
    featured: false,
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingId) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? {
                ...p,
                ...formData,
                tags: formData.tags.split(",").map((t) => t.trim()),
              }
            : p
        )
      );
      setEditingId(null);
    } else {
      const newProject: Project = {
        id: Date.now().toString(),
        ...formData,
        tags: formData.tags.split(",").map((t) => t.trim()),
      };
      setProjects((prev) => [newProject, ...prev]);
    }

    setFormData({
      title: "",
      description: "",
      image: "",
      tags: "",
      link: "",
      github: "",
      featured: false,
    });
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.tags.join(", "),
      link: project.link || "",
      github: project.github || "",
      featured: project.featured || false,
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleExport = () => {
    const data = JSON.stringify(projects, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "projects.json";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (Array.isArray(data)) {
          setProjects(data);
          alert("Projects imported successfully!");
        }
      } catch (error) {
        alert("Error importing file. Make sure it's valid JSON.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <Link href="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4 border border-white/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-6">
                {editingId ? "Edit Project" : "Add New Project"}
              </h2>

              <div>
                <label className="block text-sm font-semibold mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                  placeholder="Project title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-white/30 resize-none"
                  placeholder="Project description"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                  placeholder="/projects/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                  placeholder="React, Next.js, Tailwind"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Link</label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">GitHub Link</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                  placeholder="https://github.com/sicsee/project"
                />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded"
                />
                <span>Featured Project</span>
              </label>

              <div className="flex gap-2">
                <button type="submit" className="flex-1">
                  <Button variant="primary" className="w-full">
                    {editingId ? "Update" : "Add"}
                  </Button>
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setFormData({
                        title: "",
                        description: "",
                        image: "",
                        tags: "",
                        link: "",
                        github: "",
                        featured: false,
                      });
                    }}
                  >
                    <Button variant="secondary">Cancel</Button>
                  </button>
                )}
              </div>
            </form>

            {/* Import/Export */}
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-semibold mb-2">Import/Export</label>
              <Button
                onClick={handleExport}
                variant="secondary"
                className="w-full"
                disabled={projects.length === 0}
              >
                Export JSON
              </Button>
              <label className="block">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
                <Button variant="secondary" className="w-full cursor-pointer">
                  Import JSON
                </Button>
              </label>
            </div>
          </div>

          {/* Projects List */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              <h2 className="text-xl font-bold mb-6">
                Projects ({projects.length})
              </h2>

              {projects.length === 0 ? (
                <div className="border border-white/10 rounded-lg p-8 text-center text-white/50">
                  No projects yet. Add one to get started!
                </div>
              ) : (
                <div className="space-y-3">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="border border-white/10 rounded-lg p-4 space-y-2 hover:border-white/30 transition-colors"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{project.title}</h3>
                            {project.featured && (
                              <span className="px-2 py-1 text-xs bg-white/20 rounded">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-white/60 text-sm mt-1">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(project)}>
                            <Button variant="secondary" size="sm">
                              Edit
                            </Button>
                          </button>
                          <button onClick={() => handleDelete(project.id)}>
                            <Button variant="secondary" size="sm">
                              Delete
                            </Button>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
