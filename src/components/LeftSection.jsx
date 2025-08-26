import { Card, CardContent } from "@/components/ui/card"
import jsonExample from "../mooks/exampleJosn.json"
import CopyClipboard from "./CopyClipboard"

const LeftSection = () => {

  return (
    <div className="lg:col-span-6">
      <Card className="bg-card border-border rounded-sm shadow-lg">
        <CardContent>
          <div className="flex items-center justify-end mb-4">
            <CopyClipboard jsonElement={ jsonExample } />
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 overflow-y-auto max-h-[600px] bg-gray-100 dark:bg-gray-800/50">
            <pre className="font-mono text-primary text-md">
              <code>{JSON.stringify(jsonExample, null, 2)}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LeftSection