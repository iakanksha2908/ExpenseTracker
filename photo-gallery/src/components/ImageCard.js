import React from 'react';

const ImageCard = ({image}) => {

    const tags = image.tags.split(',');
    
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>

        </ul>
      </div>
      <span className="inline-blcok bg-gray-200 rounded-full-px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #tag1
      </span>
      <span className="inline-blcok bg-gray-200 rounded-full-px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #tag2
      </span>
      <span className="inline-blcok bg-gray-200 rounded-full-px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #tag3
      </span>

    </div>
  )
}

export default ImageCard;