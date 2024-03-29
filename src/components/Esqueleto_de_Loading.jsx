import React from "react";

const Esqueleto_de_Loading = () =>{
    return(
    <div class="min-h-screen py-10 bg-white">
        <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="animate-pulse space-y-4">
          <div class="h-4 bg-gray-300 rounded w-2/3"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded w-1/2"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
    
        <div class="animate-pulse space-y-4 mt-12">
          <div class="h-4 bg-gray-300 rounded w-2/3"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded w-1/2"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
    )
}
export default Esqueleto_de_Loading;