import { Category } from '../../category/entities/category.entity';
import { Transmission } from '../../transmission/entities/transmission.entity';
import { Tag } from '../../tag/entities/tag.entity';
export class CreateCarDto {
  name: string;
  description: string;
  horsePower: number;
  gasToKm: number;
  category: Category;
  transmission: Transmission;
  tags: Tag[];
}
