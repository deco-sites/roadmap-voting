
export interface RoadmapItem {
  title: string;
  /** @format textarea */
  description: string;
  upvotes: number;
  downvotes: number;
}

export interface Props {
  /**
  * @description The list of Roadmap items.
  */
  roadmapItems?: RoadmapItem[];
}

export default function RoadmapList({ 
  roadmapItems = [
    {
      title: "Default Title",
      description: "Default Description",
      upvotes: 0,
      downvotes: 0
    }
  ]
}: Props) {
  return (
    <div>
      {roadmapItems.map((item, index) => (
        <div key={index} class="bg-white p-4 my-4 rounded-md shadow-md">
          <h2 class="text-xl font-semibold mb-2">{item.title}</h2>
          <p class="text-gray-600 mb-2">{item.description}</p>
          
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
              <span class="text-xl">💚</span>
              <span>{item.upvotes}</span>
            </div>
            <div class="flex items-center space-x-1">
              <span class="text-xl">🔻</span>
              <span>{item.downvotes}</span>
            </div>
            
            <button class="text-red-600">❌</button>
          </div>
        </div>
      ))}
    </div>
  )
}
