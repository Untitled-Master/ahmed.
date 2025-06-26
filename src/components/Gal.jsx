"use client"

import { useState, useEffect } from "react"
import {
  ImageIcon,
  Trophy,
  Code2,
  Users,
  GraduationCap,
  Calendar,
  MapPin,
  Eye,
  Download,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const galleryItems = [
    {
      id: 1,
      title: "Bytecraft BD party",
      description: "chess goes prrrrrrrr (I won)",
      category: "competitions",
      type: "image",
      image: "https://i.postimg.cc/jjPwXctZ/DSC-0478.jpg",
      date: "2024",
      location: "ESTIN",
      tags: ["Chess", "Competition", "Victory"],
      featured: true,
    }
  ]


  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    let interval
    if (isPlaying && selectedImage) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredItems.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, selectedImage, filteredItems.length])

  const openLightbox = (item, index) => {
    setSelectedImage(item)
    setCurrentSlide(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setIsPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredItems.length)
    setSelectedImage(filteredItems[(currentSlide + 1) % filteredItems.length])
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
    setSelectedImage(filteredItems[(currentSlide - 1 + filteredItems.length) % filteredItems.length])
  }

  const CategoryButton = ({ category, isActive, onClick }) => {
    const Icon = category.icon
    return (
      <button
        onClick={() => onClick(category.id)}
        className={`
          relative flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-500 group
          ${
            isActive
              ? "bg-[#FAFAFA]/15 border-[#FAFAFA]/40 text-[#FAFAFA] shadow-xl"
              : "bg-[#FAFAFA]/5 border-[#FAFAFA]/15 text-[#FAFAFA]/70 hover:bg-[#FAFAFA]/10 hover:border-[#FAFAFA]/25"
          }
          border backdrop-blur-xl
        `}
      >
        <Icon
          className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-[#FAFAFA]" : "text-[#FAFAFA]/60 group-hover:text-[#FAFAFA]/80"}`}
        />
        <span className="font-medium">{category.label}</span>
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/10 to-[#FAFAFA]/5 rounded-2xl animate-pulse"></div>
        )}
      </button>
    )
  }

  const GalleryCard = ({ item, index, onClick }) => (
    <div
      className="group relative bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl border border-[#FAFAFA]/15 hover:border-[#FAFAFA]/30 hover:bg-[#FAFAFA]/12 transition-all duration-700 hover:scale-105 overflow-hidden cursor-pointer"
      onClick={() => onClick(item, index)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-[#09090B]/20 to-transparent"></div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-4 right-4">
            <div className="p-2 bg-[#FAFAFA]/20 backdrop-blur-xl rounded-full border border-[#FAFAFA]/30">
              <Trophy className="w-4 h-4 text-[#FAFAFA]" />
            </div>
          </div>
        )}

        {/* Overlay icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-[#FAFAFA]/20 backdrop-blur-xl rounded-full border border-[#FAFAFA]/30">
              <Eye className="w-5 h-5 text-[#FAFAFA]" />
            </div>
          </div>
        </div>

        {/* Date and location */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-2 text-[#FAFAFA]/80">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{item.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-[#FAFAFA]/60 mt-1">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">{item.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#FAFAFA] mb-2 group-hover:text-[#FAFAFA] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-[#FAFAFA]/80 text-sm leading-relaxed mb-4">{item.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-[#FAFAFA]/10 text-[#FAFAFA]/70 rounded-full text-xs font-medium border border-[#FAFAFA]/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative min-h-screen py-20 px-6 lg:px-8 bg-[#09090B] overflow-hidden">
      {/* Mathematical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-12 text-3xl text-[#FAFAFA]/4 animate-pulse font-light">∮</div>
        <div className="absolute top-48 right-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-1000 font-light">∇</div>
        <div className="absolute bottom-32 left-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-500 font-light">∑</div>
        <div className="absolute top-72 left-1/3 text-xl text-[#FAFAFA]/4 animate-pulse delay-700 font-light">∆</div>
        <div className="absolute bottom-48 right-1/3 text-3xl text-[#FAFAFA]/4 animate-pulse delay-300 font-light">
          Ω
        </div>
        <div className="absolute top-96 right-16 text-xl text-[#FAFAFA]/4 animate-pulse delay-900 font-light">φ</div>

        {/* Geometric patterns */}
        <div
          className="absolute top-60 right-32 w-40 h-40 border border-[#FAFAFA]/4 rotate-12 animate-spin"
          style={{ animationDuration: "60s" }}
        ></div>
        <div className="absolute bottom-60 left-32 w-28 h-28 border border-[#FAFAFA]/4 rounded-full animate-pulse"></div>
        <div
          className="absolute top-80 left-1/4 w-32 h-32 border border-[#FAFAFA]/4 rotate-45 animate-spin"
          style={{ animationDuration: "80s", animationDirection: "reverse" }}
        ></div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA]/6 via-transparent to-[#FAFAFA]/4"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#FAFAFA]/3 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar */}
          <div
            className={`lg:col-span-4 xl:col-span-3 transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="sticky top-8 space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-full border border-[#FAFAFA]/15 mb-8">
                  <ImageIcon className="w-5 h-5 text-[#FAFAFA]/70" />
                  <span className="text-sm font-medium text-[#FAFAFA]/70">Visual Journey</span>
                </div>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FAFAFA] mb-6 tracking-tight">
                  Gallery
                  <span className="block text-[#FAFAFA]/60 relative">
                    Moments
                    <div className="absolute -top-2 -right-4 text-2xl text-[#FAFAFA]/20">∞</div>
                  </span>
                </h2>

                <p className="text-lg text-[#FAFAFA]/80 leading-relaxed font-light mb-8">
                  A visual collection of my academic journey, project developments, competition experiences, and club
                  activities at ESTIN and beyond.
                </p>
              </div>


              {/* Stats */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Gallery Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Total Images</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">{galleryItems.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Featured</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">
                      {galleryItems.filter((item) => item.featured).length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Projects</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">
                      {galleryItems.filter((item) => item.category === "projects").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Competitions</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">
                      {galleryItems.filter((item) => item.category === "competitions").length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recent highlights */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Recent Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">NextRace CTF Competition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">SecureVault Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Club Collaborations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Academic Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div
            className={`lg:col-span-8 xl:col-span-9 transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} onClick={openLightbox} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-[#09090B]/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-3 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-full border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 transition-all duration-300"
            >
              <X className="w-6 h-6 text-[#FAFAFA]" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-full border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-[#FAFAFA]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-full border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-[#FAFAFA]" />
            </button>

            {/* Slideshow controls */}
            <div className="absolute top-4 left-4 z-10 flex items-center space-x-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-full border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-5 h-5 text-[#FAFAFA]" /> : <Play className="w-5 h-5 text-[#FAFAFA]" />}
              </button>

              <div className="flex items-center space-x-2">
                <button className="p-2 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-full border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 transition-all duration-300">
                  <Download className="w-4 h-4 text-[#FAFAFA]" />
                </button>
                <button className="p-2 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-full border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 transition-all duration-300">
                  <Share2 className="w-4 h-4 text-[#FAFAFA]" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl border border-[#FAFAFA]/15 overflow-hidden">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-2">{selectedImage.title}</h3>
                    <p className="text-[#FAFAFA]/80 leading-relaxed mb-4">{selectedImage.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-[#FAFAFA]/60 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#FAFAFA]/60">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{selectedImage.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#FAFAFA]/10 text-[#FAFAFA]/70 rounded-full text-sm font-medium border border-[#FAFAFA]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setSelectedImage(filteredItems[index])
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#FAFAFA] w-8" : "bg-[#FAFAFA]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
