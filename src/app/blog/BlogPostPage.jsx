"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { blogs } from "@/data/blogs";

const POSTS_PER_PAGE = 12;

const formatDate = (date) => {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogPostPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedBlogs = useMemo(() => {
    return [...(blogs || [])].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const totalPages = Math.max(1, Math.ceil(sortedBlogs.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedBlogs = useMemo(
    () =>
      sortedBlogs.slice(
        (safePage - 1) * POSTS_PER_PAGE,
        safePage * POSTS_PER_PAGE
      ),
    [sortedBlogs, safePage]
  );

  const goToPage = (page) => {
    const next = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-2 md:mb-3 text-gray-900 mt-14 sm:mt-20 md:mt-14">
            Blog
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Expert Ayurvedic insights, patient care tips, and health awareness
            articles from Balprada Ayurvedic Hospital.
          </p>
        </div>

        {/* BLOG GRID */}
        {paginatedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10">
            {paginatedBlogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg md:rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[13/9] overflow-hidden bg-gray-100">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#b00000] flex items-center justify-center">
                      <span className="text-white text-xs font-medium px-2 text-center">
                        {post.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  {formatDate(post.date) && (
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1 text-[#b00000]">
                        <Calendar size={12} />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </span>
                    </div>
                  )}

                  <h2 className="text-sm md:text-base font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-[#b00000] transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-3">
                    {post.content || post.subtitle || ""}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:text-[#b00000] transition mb-3">
                    Read More
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-2 mt-auto border-t border-gray-100">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-md group-hover:bg-red-50 group-hover:text-[#b00000] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-16">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 max-w-md mx-auto">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Tag size={24} className="text-gray-400" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                No blogs found
              </h2>
              <p className="text-sm text-gray-600">
                No blogs available at the moment. Please check back later.
              </p>
            </div>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="flex flex-wrap justify-center items-center gap-2"
          >
            <button
              type="button"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
                safePage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-red-50 hover:text-[#b00000] border border-gray-200 shadow-sm"
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => goToPage(i + 1)}
                aria-current={safePage === i + 1 ? "page" : undefined}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
                  safePage === i + 1
                    ? "bg-[#b00000] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:text-[#b00000] border border-gray-200 shadow-sm"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === totalPages}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
                safePage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-red-50 hover:text-[#b00000] border border-gray-200 shadow-sm"
              }`}
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default BlogPostPage;