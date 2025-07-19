"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Plus, Edit, Trash2, BookOpen, ArrowLeft, Save, X } from "lucide-react"
import Link from "next/link"

interface Course {
  id: string
  title: string
  description: string
  price: number
  originalPrice: number
  duration: string
  students: number
  rating: number
  category: string
  level: string
  instructor: string
  image: string
  features: string[]
}

const initialCourses: Course[] = [
  {
    id: "1",
    title: "Desenvolvimento Full Stack",
    description: "Domine React, Node.js, TypeScript e muito mais",
    price: 497,
    originalPrice: 997,
    duration: "120h",
    students: 2500,
    rating: 4.9,
    category: "Programação",
    level: "Intermediário",
    instructor: "João Silva",
    image: "purple-pink",
    features: ["Projetos práticos reais", "Mentoria individual", "Certificado reconhecido"],
  },
  {
    id: "2",
    title: "Data Science & IA",
    description: "Python, Machine Learning e Análise de Dados",
    price: 397,
    originalPrice: 797,
    duration: "90h",
    students: 1800,
    rating: 4.8,
    category: "Data Science",
    level: "Avançado",
    instructor: "Maria Santos",
    image: "blue-cyan",
    features: ["Datasets reais", "Projetos de portfólio", "Suporte vitalício"],
  },
  {
    id: "3",
    title: "UX/UI Design",
    description: "Figma, Design System e Prototipação",
    price: 297,
    originalPrice: 597,
    duration: "80h",
    students: 1200,
    rating: 4.9,
    category: "Design",
    level: "Iniciante",
    instructor: "Pedro Costa",
    image: "green-emerald",
    features: ["Cases reais de mercado", "Feedback personalizado", "Comunidade exclusiva"],
  },
]

const categories = ["Programação", "Data Science", "Design", "Marketing", "Negócios"]
const levels = ["Iniciante", "Intermediário", "Avançado"]
const imageOptions = ["purple-pink", "blue-cyan", "green-emerald", "orange-red", "indigo-purple"]

export default function AdminPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [formData, setFormData] = useState<Partial<Course>>({
    title: "",
    description: "",
    price: 0,
    originalPrice: 0,
    duration: "",
    students: 0,
    rating: 5.0,
    category: "",
    level: "",
    instructor: "",
    image: "purple-pink",
    features: ["", "", ""],
  })

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: 0,
      originalPrice: 0,
      duration: "",
      students: 0,
      rating: 5.0,
      category: "",
      level: "",
      instructor: "",
      image: "purple-pink",
      features: ["", "", ""],
    })
  }

  const handleCreate = () => {
    if (!formData.title || !formData.description || !formData.category) return

    const newCourse: Course = {
      id: Date.now().toString(),
      title: formData.title!,
      description: formData.description!,
      price: formData.price || 0,
      originalPrice: formData.originalPrice || 0,
      duration: formData.duration || "0h",
      students: formData.students || 0,
      rating: formData.rating || 5.0,
      category: formData.category!,
      level: formData.level || "Iniciante",
      instructor: formData.instructor || "Instrutor",
      image: formData.image || "purple-pink",
      features: formData.features?.filter((f) => f.trim() !== "") || [],
    }

    setCourses([...courses, newCourse])
    setIsCreateDialogOpen(false)
    resetForm()
  }

  const handleEdit = (course: Course) => {
    setEditingCourse(course)
    setFormData({
      ...course,
      features: [...course.features, "", "", ""].slice(0, 3),
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdate = () => {
    if (!editingCourse || !formData.title || !formData.description) return

    const updatedCourse: Course = {
      ...editingCourse,
      title: formData.title!,
      description: formData.description!,
      price: formData.price || 0,
      originalPrice: formData.originalPrice || 0,
      duration: formData.duration || "0h",
      students: formData.students || 0,
      rating: formData.rating || 5.0,
      category: formData.category!,
      level: formData.level || "Iniciante",
      instructor: formData.instructor || "Instrutor",
      image: formData.image || "purple-pink",
      features: formData.features?.filter((f) => f.trim() !== "") || [],
    }

    setCourses(courses.map((c) => (c.id === editingCourse.id ? updatedCourse : c)))
    setIsEditDialogOpen(false)
    setEditingCourse(null)
    resetForm()
  }

  const handleDelete = (courseId: string) => {
    setCourses(courses.filter((c) => c.id !== courseId))
  }

  const getImageGradient = (image: string) => {
    const gradients = {
      "purple-pink": "from-purple-600 to-pink-600",
      "blue-cyan": "from-blue-600 to-cyan-600",
      "green-emerald": "from-green-600 to-emerald-600",
      "orange-red": "from-orange-600 to-red-600",
      "indigo-purple": "from-indigo-600 to-purple-600",
    }
    return gradients[image as keyof typeof gradients] || gradients["purple-pink"]
  }

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...(formData.features || ["", "", ""])]
    newFeatures[index] = value
    setFormData({ ...formData, features: newFeatures })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Admin - Gerenciar Cursos</span>
            </div>
          </div>

          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                Novo Curso
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Criar Novo Curso</DialogTitle>
                <DialogDescription className="text-gray-400">Preencha as informações do novo curso</DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instructor">Instrutor</Label>
                    <Input
                      id="instructor"
                      value={formData.instructor}
                      onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Descrição *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-gray-800 border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Categoria *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-600">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="level">Nível</Label>
                    <Select
                      value={formData.level}
                      onValueChange={(value) => setFormData({ ...formData, level: value })}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-600">
                        <SelectValue placeholder="Selecione o nível" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        {levels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Preço (R$)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="originalPrice">Preço Original (R$)</Label>
                    <Input
                      id="originalPrice"
                      type="number"
                      value={formData.originalPrice}
                      onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duração</Label>
                    <Input
                      id="duration"
                      placeholder="ex: 120h"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="students">Número de Alunos</Label>
                    <Input
                      id="students"
                      type="number"
                      value={formData.students}
                      onChange={(e) => setFormData({ ...formData, students: Number(e.target.value) })}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rating">Avaliação (1-5)</Label>
                    <Input
                      id="rating"
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image">Cor do Card</Label>
                  <Select value={formData.image} onValueChange={(value) => setFormData({ ...formData, image: value })}>
                    <SelectTrigger className="bg-gray-800 border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {imageOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded bg-gradient-to-r ${getImageGradient(option)}`}></div>
                            {option}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Características do Curso</Label>
                  {[0, 1, 2].map((index) => (
                    <Input
                      key={index}
                      placeholder={`Característica ${index + 1}`}
                      value={formData.features?.[index] || ""}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      className="bg-gray-800 border-gray-600 mt-2"
                    />
                  ))}
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="border-gray-600">
                  <X className="w-4 h-4 mr-2" />
                  Cancelar
                </Button>
                <Button onClick={handleCreate} className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Save className="w-4 h-4 mr-2" />
                  Criar Curso
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Gerenciar Cursos</h1>
          <p className="text-gray-400">Total de {courses.length} cursos cadastrados</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-full h-32 bg-gradient-to-br ${getImageGradient(course.image)} rounded-lg mb-4 flex items-center justify-center`}
                >
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{course.category}</Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg">{course.title}</CardTitle>
                <CardDescription className="text-gray-400">{course.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span>{course.duration}</span>
                  <span>{course.students} alunos</span>
                  <span>⭐ {course.rating}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-white">R$ {course.price}</span>
                    {course.originalPrice > course.price && (
                      <span className="text-lg text-gray-400 line-through">R$ {course.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">Instrutor: {course.instructor}</p>
                </div>

                <div className="flex gap-2">
                  <Dialog
                    open={isEditDialogOpen && editingCourse?.id === course.id}
                    onOpenChange={(open) => {
                      if (!open) {
                        setIsEditDialogOpen(false)
                        setEditingCourse(null)
                        resetForm()
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(course)}
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Editar Curso</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Atualize as informações do curso
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="edit-title">Título *</Label>
                            <Input
                              id="edit-title"
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              className="bg-gray-800 border-gray-600"
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-instructor">Instrutor</Label>
                            <Input
                              id="edit-instructor"
                              value={formData.instructor}
                              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                              className="bg-gray-800 border-gray-600"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="edit-description">Descrição *</Label>
                          <Textarea
                            id="edit-description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="bg-gray-800 border-gray-600"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="edit-category">Categoria *</Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) => setFormData({ ...formData, category: value })}
                            >
                              <SelectTrigger className="bg-gray-800 border-gray-600">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-600">
                                {categories.map((cat) => (
                                  <SelectItem key={cat} value={cat}>
                                    {cat}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="edit-level">Nível</Label>
                            <Select
                              value={formData.level}
                              onValueChange={(value) => setFormData({ ...formData, level: value })}
                            >
                              <SelectTrigger className="bg-gray-800 border-gray-600">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-600">
                                {levels.map((level) => (
                                  <SelectItem key={level} value={level}>
                                    {level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="edit-price">Preço (R$)</Label>
                            <Input
                              id="edit-price"
                              type="number"
                              value={formData.price}
                              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                              className="bg-gray-800 border-gray-600"
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-originalPrice">Preço Original (R$)</Label>
                            <Input
                              id="edit-originalPrice"
                              type="number"
                              value={formData.originalPrice}
                              onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
                              className="bg-gray-800 border-gray-600"
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-duration">Duração</Label>
                            <Input
                              id="edit-duration"
                              value={formData.duration}
                              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                              className="bg-gray-800 border-gray-600"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="edit-students">Número de Alunos</Label>
                            <Input
                              id="edit-students"
                              type="number"
                              value={formData.students}
                              onChange={(e) => setFormData({ ...formData, students: Number(e.target.value) })}
                              className="bg-gray-800 border-gray-600"
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-rating">Avaliação (1-5)</Label>
                            <Input
                              id="edit-rating"
                              type="number"
                              min="1"
                              max="5"
                              step="0.1"
                              value={formData.rating}
                              onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                              className="bg-gray-800 border-gray-600"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="edit-image">Cor do Card</Label>
                          <Select
                            value={formData.image}
                            onValueChange={(value) => setFormData({ ...formData, image: value })}
                          >
                            <SelectTrigger className="bg-gray-800 border-gray-600">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              {imageOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  <div className="flex items-center gap-2">
                                    <div
                                      className={`w-4 h-4 rounded bg-gradient-to-r ${getImageGradient(option)}`}
                                    ></div>
                                    {option}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label>Características do Curso</Label>
                          {[0, 1, 2].map((index) => (
                            <Input
                              key={index}
                              placeholder={`Característica ${index + 1}`}
                              value={formData.features?.[index] || ""}
                              onChange={(e) => handleFeatureChange(index, e.target.value)}
                              className="bg-gray-800 border-gray-600 mt-2"
                            />
                          ))}
                        </div>
                      </div>

                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsEditDialogOpen(false)
                            setEditingCourse(null)
                            resetForm()
                          }}
                          className="border-gray-600"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancelar
                        </Button>
                        <Button onClick={handleUpdate} className="bg-gradient-to-r from-purple-600 to-pink-600">
                          <Save className="w-4 h-4 mr-2" />
                          Salvar Alterações
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Excluir
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-gray-900 border-gray-700">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">Confirmar Exclusão</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-400">
                          Tem certeza que deseja excluir o curso "{course.title}"? Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-gray-600 text-gray-300 hover:bg-gray-700">
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(course.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Excluir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">Nenhum curso cadastrado</h3>
            <p className="text-gray-500 mb-6">Comece criando seu primeiro curso</p>
            <Button
              onClick={() => setIsCreateDialogOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Criar Primeiro Curso
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
