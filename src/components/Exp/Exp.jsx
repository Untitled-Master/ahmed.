import { Trophy, Terminal, Target, Award, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CTFExperience = () => {
  return (
    <div className="min-h-screen bg-[#09090B] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 text-[#FAFAFA]" />
          <h1 className="text-4xl font-bold text-[#FAFAFA]">
            Events:
          </h1>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-[#09090B] border border-[#FAFAFA]/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  Achievement
                </Badge>
              </div>
              <p className="text-3xl font-bold text-[#FAFAFA] mt-4">Top 50%</p>
              <p className="text-sm text-[#FAFAFA]/60">Performance Ranking</p>
            </CardContent>
          </Card>

          <Card className="bg-[#09090B] border border-[#FAFAFA]/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <Target className="w-6 h-6 text-blue-500" />
                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                  Events
                </Badge>
              </div>
              <p className="text-3xl font-bold text-[#FAFAFA] mt-4">1</p>
              <p className="text-sm text-[#FAFAFA]/60">CTFs Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-[#09090B] border border-[#FAFAFA]/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <Users className="w-6 h-6 text-green-500" />
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Team
                </Badge>
              </div>
              <p className="text-3xl font-bold text-[#FAFAFA] mt-4">13/26</p>
              <p className="text-sm text-[#FAFAFA]/60">Best Team Placement</p>
            </CardContent>
          </Card>
        </div>

        {/* Competition History */}
        <Card className="bg-[#09090B] border border-[#FAFAFA]/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-[#FAFAFA]" />
              <CardTitle className="text-xl text-[#FAFAFA]">
                Competition History
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="min-w-[4px] h-full bg-[#FAFAFA]/10 absolute left-[7px] top-10" />
                  <div className="w-4 h-4 rounded-full bg-blue-500 z-10" />
                  <div className="flex-1 bg-[#FAFAFA]/5 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#FAFAFA]">
                          NextRace CTF
                        </h3>
                        <p className="text-[#FAFAFA]/60 text-sm">
                          Organized by Nexus Club
                        </p>
                      </div>
                      <Badge 
                        className="bg-blue-500/10 text-blue-500 border-blue-500/20"
                      >
                        13th Place
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#09090B] p-3 rounded border border-[#FAFAFA]/10">
                        <p className="text-sm text-[#FAFAFA]/60">Team Ranking</p>
                        <p className="text-lg font-semibold text-[#FAFAFA]">13/26</p>
                      </div>
                      <div className="bg-[#09090B] p-3 rounded border border-[#FAFAFA]/10">
                        <p className="text-sm text-[#FAFAFA]/60">Percentile</p>
                        <p className="text-lg font-semibold text-[#FAFAFA]">50th</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardContent>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="min-w-[4px] h-full bg-[#FAFAFA]/10 absolute left-[7px] top-10" />
                  <div className="w-4 h-4 rounded-full bg-blue-500 z-10" />
                  <div className="flex-1 bg-[#FAFAFA]/5 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#FAFAFA]">
                        Cicada Game OSINT
                        </h3>
                        <p className="text-[#FAFAFA]/60 text-sm">
                          Organized by Nexus Club
                        </p>
                      </div>
                      <Badge 
                        className="bg-blue-500/10 text-blue-500 border-blue-500/20"
                      >
                        /
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#09090B] p-3 rounded border border-[#FAFAFA]/10">
                        <p className="text-sm text-[#FAFAFA]/60">Solved</p>
                        <p className="text-lg font-semibold text-[#FAFAFA]">3/4 challenges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CTFExperience;