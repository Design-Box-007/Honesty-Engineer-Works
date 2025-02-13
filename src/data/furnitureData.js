// furnitureData.js

// Import images
import DiningTableImg1 from '../assets/FurniturePageImageOne.png';
import DiningTableImg2 from '../assets/FurniturePageImageTwo.png';
import DiningTableImg3 from '../assets/FurniturePageImageThree.png';
import CoffeeTableImg1 from '../assets/FurniturePageImageTwo.png';
import CoffeeTableImg2 from '../assets/FurniturePageImageThree.png';
import CoffeeTableImg3 from '../assets/FurniturePageImageOne.png';
import OfficeTableImg1 from '../assets/FurniturePageImageThree.png';
import OfficeTableImg2 from '../assets/FurniturePageImageOne.png';
import OfficeTableImg3 from '../assets/FurniturePageImageTwo.png';
import StudyTableImg1 from '../assets/FurniturePageImageOne.png';
import StudyTableImg2 from '../assets/FurniturePageImageTwo.png';
import StudyTableImg3 from '../assets/FurniturePageImageThree.png';

import OfficeChairImg1 from '../assets/FurniturePageImageTwo.png';
import OfficeChairImg2 from '../assets/FurniturePageImageThree.png';
import OfficeChairImg3 from '../assets/FurniturePageImageOne.png';
import DiningChairImg1 from '../assets/FurniturePageImageThree.png';
import DiningChairImg2 from '../assets/FurniturePageImageOne.png';
import DiningChairImg3 from '../assets/FurniturePageImageTwo.png';
import ReclinerImg1 from '../assets/FurniturePageImageOne.png';
import ReclinerImg2 from '../assets/FurniturePageImageTwo.png';
import ReclinerImg3 from '../assets/FurniturePageImageThree.png';
import LoungeChairImg1 from '../assets/FurniturePageImageTwo.png';
import LoungeChairImg2 from '../assets/FurniturePageImageThree.png';
import LoungeChairImg3 from '../assets/FurniturePageImageOne.png';

import KingBedImg1 from '../assets/FurniturePageImageThree.png';
import KingBedImg2 from '../assets/FurniturePageImageOne.png';
import KingBedImg3 from '../assets/FurniturePageImageTwo.png';
import QueenBedImg1 from '../assets/FurniturePageImageOne.png';
import QueenBedImg2 from '../assets/FurniturePageImageTwo.png';
import QueenBedImg3 from '../assets/FurniturePageImageThree.png';
import SingleBedImg1 from '../assets/FurniturePageImageTwo.png';
import SingleBedImg2 from '../assets/FurniturePageImageThree.png';
import SingleBedImg3 from '../assets/FurniturePageImageOne.png';
import BunkBedImg1 from '../assets/FurniturePageImageThree.png';
import BunkBedImg2 from '../assets/FurniturePageImageOne.png';
import BunkBedImg3 from '../assets/FurniturePageImageTwo.png';

import WritingDeskImg1 from '../assets/FurniturePageImageOne.png';
import WritingDeskImg2 from '../assets/FurniturePageImageTwo.png';
import WritingDeskImg3 from '../assets/FurniturePageImageThree.png';
import ComputerDeskImg1 from '../assets/FurniturePageImageTwo.png';
import ComputerDeskImg2 from '../assets/FurniturePageImageThree.png';
import ComputerDeskImg3 from '../assets/FurniturePageImageOne.png';
import StandingDeskImg1 from '../assets/FurniturePageImageThree.png';
import StandingDeskImg2 from '../assets/FurniturePageImageOne.png';
import StandingDeskImg3 from '../assets/FurniturePageImageTwo.png';
import CornerDeskImg1 from '../assets/FurniturePageImageOne.png';
import CornerDeskImg2 from '../assets/FurniturePageImageTwo.png';
import CornerDeskImg3 from '../assets/FurniturePageImageThree.png';

import BookshelfImg1 from '../assets/FurniturePageImageTwo.png';
import BookshelfImg2 from '../assets/FurniturePageImageThree.png';
import BookshelfImg3 from '../assets/FurniturePageImageOne.png';
import WardrobeImg1 from '../assets/FurniturePageImageThree.png';
import WardrobeImg2 from '../assets/FurniturePageImageOne.png';
import WardrobeImg3 from '../assets/FurniturePageImageTwo.png';
import CabinetImg1 from '../assets/FurniturePageImageOne.png';
import CabinetImg2 from '../assets/FurniturePageImageTwo.png';
import CabinetImg3 from '../assets/FurniturePageImageThree.png';
import StorageBinImg1 from '../assets/FurniturePageImageTwo.png';
import StorageBinImg2 from '../assets/FurniturePageImageThree.png';
import StorageBinImg3 from '../assets/FurniturePageImageOne.png';

// Define furniture data
const furnitureData = [
{ title:'Tables',
  items: {
    subCategories: [
      { id: "Dining", title: "Dining Tables", image: DiningTableImg1 },
      { id: "Coffee", title: "Coffee Tables", image: CoffeeTableImg1 },
      { id: "Office", title: "Office Tables", image: OfficeTableImg1 },
      { id: "Study", title: "Study Tables", image: StudyTableImg1 }
    ],
    items: {
      Dining: [
        { id: 1, image: DiningTableImg1, title: "Dining Table 1" },
        { id: 2, image: DiningTableImg2, title: "Dining Table 2" },
        { id: 3, image: DiningTableImg3, title: "Dining Table 3" },
        { id: 4, image: DiningTableImg1, title: "Dining Table 4" },
        { id: 5, image: DiningTableImg2, title: "Dining Table 5" },
        { id: 6, image: DiningTableImg3, title: "Dining Table 6" },
        { id: 7, image: DiningTableImg1, title: "Dining Table 7" },
        { id: 8, image: DiningTableImg2, title: "Dining Table 8" }
      ],
      Coffee: [
        { id: 1, image: CoffeeTableImg1, title: "Coffee Table 1" },
        { id: 2, image: CoffeeTableImg2, title: "Coffee Table 2" },
        { id: 3, image: CoffeeTableImg3, title: "Coffee Table 3" },
        { id: 4, image: CoffeeTableImg1, title: "Coffee Table 4" },
        { id: 5, image: CoffeeTableImg2, title: "Coffee Table 5" },
        { id: 6, image: CoffeeTableImg3, title: "Coffee Table 6" },
        { id: 7, image: CoffeeTableImg1, title: "Coffee Table 7" },
        { id: 8, image: CoffeeTableImg2, title: "Coffee Table 8" }
      ],
      Office: [
        { id: 1, image: OfficeTableImg1, title: "Office Table 1" },
        { id: 2, image: OfficeTableImg2, title: "Office Table 2" },
        { id: 3, image: OfficeTableImg3, title: "Office Table 3" },
        { id: 4, image: OfficeTableImg1, title: "Office Table 4" },
        { id: 5, image: OfficeTableImg2, title: "Office Table 5" },
        { id: 6, image: OfficeTableImg3, title: "Office Table 6" },
        { id: 7, image: OfficeTableImg1, title: "Office Table 7" },
        { id: 8, image: OfficeTableImg2, title: "Office Table 8" }
      ],
      Study: [
        { id: 1, image: StudyTableImg1, title: "Study Table 1" },
        { id: 2, image: StudyTableImg2, title: "Study Table 2" },
        { id: 3, image: StudyTableImg3, title: "Study Table 3" },
        { id: 4, image: StudyTableImg1, title: "Study Table 4" },
        { id: 5, image: StudyTableImg2, title: "Study Table 5" },
        { id: 6, image: StudyTableImg3, title: "Study Table 6" },
        { id: 7, image: StudyTableImg1, title: "Study Table 7" },
        { id: 8, image: StudyTableImg2, title: "Study Table 8" }
      ]
    }
  }},
  {title:'Chairs',
    items: {
    subCategories: [
      { id: "Office", title: "Office Chairs", image: OfficeChairImg1 },
      { id: "Dining", title: "Dining Chairs", image: DiningChairImg1 },
      { id: "Recliners", title: "Recliners", image: ReclinerImg1 },
      { id: "Lounge", title: "Lounge Chairs", image: LoungeChairImg1 }
    ],
    items: {
      Office: [
        { id: 1, image: OfficeChairImg1, title: "Office Chair 1" },
        { id: 2, image: OfficeChairImg2, title: "Office Chair 2" },
        { id: 3, image: OfficeChairImg3, title: "Office Chair 3" },
        { id: 4, image: OfficeChairImg1, title: "Office Chair 4" },
        { id: 5, image: OfficeChairImg2, title: "Office Chair 5" },
        { id: 6, image: OfficeChairImg3, title: "Office Chair 6" },
        { id: 7, image: OfficeChairImg1, title: "Office Chair 7" },
        { id: 8, image: OfficeChairImg2, title: "Office Chair 8" }
      ],
      Dining: [
        { id: 1, image: DiningChairImg1, title: "Dining Chair 1" },
        { id: 2, image: DiningChairImg2, title: "Dining Chair 2" },
        { id: 3, image: DiningChairImg3, title: "Dining Chair 3" },
        { id: 4, image: DiningChairImg1, title: "Dining Chair 4" },
        { id: 5, image: DiningChairImg2, title: "Dining Chair 5" },
        { id: 6, image: DiningChairImg3, title: "Dining Chair 6" },
        { id: 7, image: DiningChairImg1, title: "Dining Chair 7" },
        { id: 8, image: DiningChairImg2, title: "Dining Chair 8" }
      ],
      Recliners: [
        { id: 1, image: ReclinerImg1, title: "Recliner 1" },
        { id: 2, image: ReclinerImg2, title: "Recliner 2" },
        { id: 3, image: ReclinerImg3, title: "Recliner 3" },
        { id: 4, image: ReclinerImg1, title: "Recliner 4" },
        { id: 5, image: ReclinerImg2, title: "Recliner 5" },
        { id: 6, image: ReclinerImg3, title: "Recliner 6" },
        { id: 7, image: ReclinerImg1, title: "Recliner 7" },
        { id: 8, image: ReclinerImg2, title: "Recliner 8" }
      ],
      Lounge: [
        { id: 1, image: LoungeChairImg1, title: "Lounge Chair 1" },
        { id: 2, image: LoungeChairImg2, title: "Lounge Chair 2" },
        { id: 3, image: LoungeChairImg3, title: "Lounge Chair 3" },
        { id: 4, image: LoungeChairImg1, title: "Lounge Chair 4" },
        { id: 5, image: LoungeChairImg2, title: "Lounge Chair 5" },
        { id: 6, image: LoungeChairImg3, title: "Lounge Chair 6" },
        { id: 7, image: LoungeChairImg1, title: "Lounge Chair 7" },
        { id: 8, image: LoungeChairImg2, title: "Lounge Chair 8" }
      ]
    }
  }},{ title:'Beds',
  items: {
    subCategories: [
      { id: "King", title: "King Size Beds", image: KingBedImg1 },
      { id: "Queen", title: "Queen Size Beds", image: QueenBedImg1 },
      { id: "Single", title: "Single Beds", image: SingleBedImg1 },
      { id: "Bunk", title: "Bunk Beds", image: BunkBedImg1 }
    ],
    items: {
      King: [
        { id: 1, image: KingBedImg1, title: "King Bed 1" },
        { id: 2, image: KingBedImg2, title: "King Bed 2" },
        { id: 3, image: KingBedImg3, title: "King Bed 3" },
        { id: 4, image: KingBedImg1, title: "King Bed 4" },
        { id: 5, image: KingBedImg2, title: "King Bed 5" },
        { id: 6, image: KingBedImg3, title: "King Bed 6" },
        { id: 7, image: KingBedImg1, title: "King Bed 7" },
        { id: 8, image: KingBedImg2, title: "King Bed 8" }
      ],
      Queen: [
        { id: 1, image: QueenBedImg1, title: "Queen Bed 1" },
        { id: 2, image: QueenBedImg2, title: "Queen Bed 2" },
        { id: 3, image: QueenBedImg3, title: "Queen Bed 3" },
        { id: 4, image: QueenBedImg1, title: "Queen Bed 4" },
        { id: 5, image: QueenBedImg2, title: "Queen Bed 5" },
        { id: 6, image: QueenBedImg3, title: "Queen Bed 6" },
        { id: 7, image: QueenBedImg1, title: "Queen Bed 7" },
        { id: 8, image: QueenBedImg2, title: "Queen Bed 8" }
      ],
      Single: [
        { id: 1, image: SingleBedImg1, title: "Single Bed 1" },
        { id: 2, image: SingleBedImg2, title: "Single Bed 2" },
        { id: 3, image: SingleBedImg3, title: "Single Bed 3" },
        { id: 4, image: SingleBedImg1, title: "Single Bed 4" },
        { id: 5, image: SingleBedImg2, title: "Single Bed 5" },
        { id: 6, image: SingleBedImg3, title: "Single Bed 6" },
        { id: 7, image: SingleBedImg1, title: "Single Bed 7" },
        { id: 8, image: SingleBedImg2, title: "Single Bed 8" }
      ],
      Bunk: [
        { id: 1, image: BunkBedImg1, title: "Bunk Bed 1" },
        { id: 2, image: BunkBedImg2, title: "Bunk Bed 2" },
        { id: 3, image: BunkBedImg3, title: "Bunk Bed 3" },
        { id: 4, image: BunkBedImg1, title: "Bunk Bed 4" },
        { id: 5, image: BunkBedImg2, title: "Bunk Bed 5" },
        { id: 6, image: BunkBedImg3, title: "Bunk Bed 6" },
        { id: 7, image: BunkBedImg1, title: "Bunk Bed 7" },
        { id: 8, image: BunkBedImg2, title: "Bunk Bed 8" }
      ]
    }
  }},{title:'Desks',
  items: {
    subCategories: [
      { id: "Writing", title: "Writing Desks", image: WritingDeskImg1 },
      { id: "Computer", title: "Computer Desks", image: ComputerDeskImg1 },
      { id: "Standing", title: "Standing Desks", image: StandingDeskImg1 },
      { id: "Corner", title: "Corner Desks", image: CornerDeskImg1 }
    ],
    items: {
      Writing: [
        { id: 1, image: WritingDeskImg1, title: "Writing Desk 1" },
        { id: 2, image: WritingDeskImg2, title: "Writing Desk 2" },
        { id: 3, image: WritingDeskImg3, title: "Writing Desk 3" },
        { id: 4, image: WritingDeskImg1, title: "Writing Desk 4" },
        { id: 5, image: WritingDeskImg2, title: "Writing Desk 5" },
        { id: 6, image: WritingDeskImg3, title: "Writing Desk 6" },
        { id: 7, image: WritingDeskImg1, title: "Writing Desk 7" },
        { id: 8, image: WritingDeskImg2, title: "Writing Desk 8" }
      ],
      Computer: [
        { id: 1, image: ComputerDeskImg1, title: "Computer Desk 1" },
        { id: 2, image: ComputerDeskImg2, title: "Computer Desk 2" },
        { id: 3, image: ComputerDeskImg3, title: "Computer Desk 3" },
        { id: 4, image: ComputerDeskImg1, title: "Computer Desk 4" },
        { id: 5, image: ComputerDeskImg2, title: "Computer Desk 5" },
        { id: 6, image: ComputerDeskImg3, title: "Computer Desk 6" },
        { id: 7, image: ComputerDeskImg1, title: "Computer Desk 7" },
        { id: 8, image: ComputerDeskImg2, title: "Computer Desk 8" }
      ],
      Standing: [
        { id: 1, image: StandingDeskImg1, title: "Standing Desk 1" },
        { id: 2, image: StandingDeskImg2, title: "Standing Desk 2" },
        { id: 3, image: StandingDeskImg3, title: "Standing Desk 3" },
        { id: 4, image: StandingDeskImg1, title: "Standing Desk 4" },
        { id: 5, image: StandingDeskImg2, title: "Standing Desk 5" },
        { id: 6, image: StandingDeskImg3, title: "Standing Desk 6" },
        { id: 7, image: StandingDeskImg1, title: "Standing Desk 7" },
        { id: 8, image: StandingDeskImg2, title: "Standing Desk 8" }
      ],
      Corner: [
        { id: 1, image: CornerDeskImg1, title: "Corner Desk 1" },
        { id: 2, image: CornerDeskImg2, title: "Corner Desk 2" },
        { id: 3, image: CornerDeskImg3, title: "Corner Desk 3" },
        { id: 4, image: CornerDeskImg1, title: "Corner Desk 4" },
        { id: 5, image: CornerDeskImg2, title: "Corner Desk 5" },
        { id: 6, image: CornerDeskImg3, title: "Corner Desk 6" },
        { id: 7, image: CornerDeskImg1, title: "Corner Desk 7" },
        { id: 8, image: CornerDeskImg2, title: "Corner Desk 8" }
      ]
    }
  }},{ title:'Storage',
  items: {
    subCategories: [
      { id: "Bookshelf", title: "Bookshelves", image: BookshelfImg1 },
      { id: "Wardrobe", title: "Wardrobes", image: WardrobeImg1 },
      { id: "Cabinet", title: "Cabinets", image: CabinetImg1 },
      { id: "StorageBin", title: "Storage Bins", image: StorageBinImg1 }
    ],
    items: {
      Bookshelf: [
        { id: 1, image: BookshelfImg1, title: "Bookshelf 1" },
        { id: 2, image: BookshelfImg2, title: "Bookshelf 2" },
        { id: 3, image: BookshelfImg3, title: "Bookshelf 3" },
        { id: 4, image: BookshelfImg1, title: "Bookshelf 4" },
        { id: 5, image: BookshelfImg2, title: "Bookshelf 5" },
        { id: 6, image: BookshelfImg3, title: "Bookshelf 6" },
        { id: 7, image: BookshelfImg1, title: "Bookshelf 7" },
        { id: 8, image: BookshelfImg2, title: "Bookshelf 8" }
      ],
      Wardrobe: [
        { id: 1, image: WardrobeImg1, title: "Wardrobe 1" },
        { id: 2, image: WardrobeImg2, title: "Wardrobe 2" },
        { id: 3, image: WardrobeImg3, title: "Wardrobe 3" },
        { id: 4, image: WardrobeImg1, title: "Wardrobe 4" },
        { id: 5, image: WardrobeImg2, title: "Wardrobe 5" },
        { id: 6, image: WardrobeImg3, title: "Wardrobe 6" },
        { id: 7, image: WardrobeImg1, title: "Wardrobe 7" },
        { id: 8, image: WardrobeImg2, title: "Wardrobe 8" }
      ],
      Cabinet: [
        { id: 1, image: CabinetImg1, title: "Cabinet 1" },
        { id: 2, image: CabinetImg2, title: "Cabinet 2" },
        { id: 3, image: CabinetImg3, title: "Cabinet 3" },
        { id: 4, image: CabinetImg1, title: "Cabinet 4" },
        { id: 5, image: CabinetImg2, title: "Cabinet 5" },
        { id: 6, image: CabinetImg3, title: "Cabinet 6" },
        { id: 7, image: CabinetImg1, title: "Cabinet 7" },
        { id: 8, image: CabinetImg2, title: "Cabinet 8" }
      ],
      StorageBin: [
        { id: 1, image: StorageBinImg1, title: "Storage Bin 1" },
        { id: 2, image: StorageBinImg2, title: "Storage Bin 2" },
        { id: 3, image: StorageBinImg3, title: "Storage Bin 3" },
        { id: 4, image: StorageBinImg1, title: "Storage Bin 4" },
        { id: 5, image: StorageBinImg2, title: "Storage Bin 5" },
        { id: 6, image: StorageBinImg3, title: "Storage Bin 6" },
        { id: 7, image: StorageBinImg1, title: "Storage Bin 7" },
        { id: 8, image: StorageBinImg2, title: "Storage Bin 8" }
      ]
    }
  }}
];

export default furnitureData;
