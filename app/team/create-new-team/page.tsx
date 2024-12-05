'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Component() {
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault()
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="mx-auto max-w-2xl p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="teamName">Team Name</Label>
            <Input id="teamName" placeholder="Enter team name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="space-y-2">
              <Input 
                id="tags" 
                placeholder="Press Enter to add tags" 
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
              />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Button 
                    key={index} 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setTags(tags.filter((_, i) => i !== index))}
                  >
                    {tag} ×
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea id="description" placeholder="Enter project description" />
          </div>

          <div className="space-y-2">
            <Label>Role Breakdown</Label>
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="envoy">Envoy</Label>
                <Input id="envoy" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="task">Task</Label>
                <Input id="task" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pass">Pass</Label>
                <Input id="pass" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal">Goal</Label>
                <Input id="goal" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tools">Tools to Use</Label>
            <Input id="tools" placeholder="Enter tools" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chainCalls">Chain Calls</Label>
            <Input id="chainCalls" type="number" placeholder="Enter chain calls" />
          </div>

          <Button type="submit" className="w-full">
            Save
          </Button>
        </form>
      </Card>
    </div>
  )
}