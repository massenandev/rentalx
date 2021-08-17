import { Category } from "../model/Category"
import { ICreateCategoryDTO } from "./ICategoriesRepository"

/**
 * DTO (data transfer object) - criar um objeto pra ser responsável pela transferência de dados entre uma camada/classe e outra
 * toda vez que precisar de um objeto que for receber informações vinda da rota, cria-se o dto 
 * pra pegar os valores da rota e receber nos repositórios
 */



class CategoriesRepository {
  private categories: Category[] 

  constructor(){
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category() 
  
    Object.assign(category, {
      name, 
      description,
      created_at: new Date()
    })
    
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name)
    
    return category
  }
}

export { CategoriesRepository }